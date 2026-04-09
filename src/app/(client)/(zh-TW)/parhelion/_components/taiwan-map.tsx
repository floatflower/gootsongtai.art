"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";

const COLOR_LEFT = "#f1f294";
const COLOR_RIGHT = "#ffafb2";

const CLOCK_START = 7 * 60; // 07:00 in minutes
const CLOCK_END = 18 * 60; // 18:00 in minutes

const OFFSHORE = new Set(["W", "X", "Z"]); // 金門, 澎湖, 連江

function toTimeStr(totalMin: number) {
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

const styles = `
  @font-face {
    font-family: 'Digital7';
    src: url('/fonts/digital-7.ttf') format('truetype');
  }
  .parhelion-map {
    background: transparent;
  }
  .parhelion-map .ocean {
    fill: rgb(160, 200, 230);
  }
  .parhelion-map .town {
    fill: #bcedcd;
    stroke: rgba(60, 130, 90, 0.35);
    stroke-width: 0.4px;
  }
  .parhelion-map .boundary {
    fill: none;
    stroke: rgba(60, 130, 90, 0.55);
    stroke-width: 0.6px;
  }
  .parhelion-map .route {
    fill: none;
    stroke: rgba(255, 160, 60, 0.85);
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .parhelion-map .dot-start,
  .parhelion-map .dot-end {
    stroke: rgba(255, 255, 255, 0.8);
    stroke-width: 1.5px;
  }
  .parhelion-map .dot-moving {
    stroke: rgba(255, 255, 255, 0.8);
    stroke-width: 1.5px;
  }
  .parhelion-map .clock-date {
    fill: rgba(255, 255, 255, 0.85);
    font-size: 11px;
    font-family: sans-serif;
    text-anchor: end;
    letter-spacing: 0.06em;
  }
  .parhelion-map .clock-time {
    fill: #ffffff;
    font-size: 38px;
    font-family: 'Digital7', monospace;
    text-anchor: end;
  }
`;

export function TaiwanMap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const routePathRef = useRef<SVGPathElement | null>(null);
  const totalLengthRef = useRef<number>(0);
  const dotMovingRef = useRef<SVGCircleElement | null>(null);
  const clockTimeRef = useRef<SVGTextElement | null>(null);

  // D3 rendering
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const el = svgRef.current;
    if (!el) return;

    const width = el.clientWidth;
    const height = el.clientHeight;
    svg.selectAll("*").remove();

    const projection = d3.geoMercator();
    const path = d3.geoPath().projection(projection);

    Promise.all([
      d3.json<Topology>("/topojson/map.topojson"),
      d3.json<Topology>("/topojson/route.topojson"),
    ]).then(([mapTopo, routeTopo]) => {
      if (!mapTopo || !routeTopo) return;

      const towns = topojson.feature(
        mapTopo,
        mapTopo.objects["TOWN_MOI_1090324"] as GeometryCollection,
      );
      const route = topojson.feature(
        routeTopo,
        routeTopo.objects["unnamed"] as GeometryCollection,
      );

      const padding = 40;
      projection.fitExtent(
        [
          [padding, padding],
          [width - padding, height - padding],
        ],
        route as GeoJSON.FeatureCollection,
      );

      // Shift everything 10px to the right
      const [tx, ty] = projection.translate();
      projection.translate([tx + 10, ty]);

      // Ocean background
      svg
        .append("rect")
        .attr("class", "ocean")
        .attr("width", width)
        .attr("height", height);

      // Main island only (exclude 金門 W, 澎湖 X, 連江 Z)
      const mainIsland = (towns as GeoJSON.FeatureCollection).features.filter(
        (f) => !OFFSHORE.has(f.properties?.COUNTYID),
      );

      svg
        .append("g")
        .selectAll("path")
        .data(mainIsland)
        .enter()
        .append("path")
        .attr("class", "town")
        .attr("d", path);

      // Boundaries — main island only
      // Re-create a FeatureCollection from mainIsland and mesh via individual paths
      // (simpler: just filter the mesh geometries by checking the arcs)
      // Practical shortcut: draw per-feature stroke to approximate internal boundaries
      svg
        .append("path")
        .datum(
          topojson.mesh(
            mapTopo,
            mapTopo.objects["TOWN_MOI_1090324"] as GeometryCollection,
            (a, b) => {
              const aid =
                (a as { properties?: { COUNTYID?: string } }).properties
                  ?.COUNTYID ?? "";
              const bid =
                (b as { properties?: { COUNTYID?: string } }).properties
                  ?.COUNTYID ?? "";
              return a !== b && !OFFSHORE.has(aid) && !OFFSHORE.has(bid);
            },
          ),
        )
        .attr("class", "boundary")
        .attr("d", path);

      // Route line
      const features = (route as GeoJSON.FeatureCollection).features;
      const lineFeatures = features.filter(
        (f) => f.geometry.type === "LineString",
      );
      const pointFeatures = features.filter((f) => f.geometry.type === "Point");

      const routePathNode = svg
        .append("g")
        .selectAll("path")
        .data(lineFeatures)
        .enter()
        .append("path")
        .attr("class", "route")
        .attr("d", path)
        .node() as SVGPathElement | null;

      if (routePathNode) {
        routePathRef.current = routePathNode;
        totalLengthRef.current = routePathNode.getTotalLength();
      }

      // Static start / end dots
      pointFeatures.forEach((f, i) => {
        const [lng, lat] = (f.geometry as GeoJSON.Point).coordinates;
        const px = projection([lng, lat]);
        if (!px) return;
        const circle = svg
          .append("circle")
          .attr("class", i === 0 ? "dot-start" : "dot-end")
          .attr("cx", px[0])
          .attr("cy", px[1])
          .attr("r", 4)
          .attr("fill", i === 0 ? "#ffafb2" : "#f1f294")
          .node() as SVGCircleElement;
      });

      // Moving dot
      if (routePathNode) {
        const startPt = routePathNode.getPointAtLength(0);
        dotMovingRef.current = svg
          .append("circle")
          .attr("class", "dot-moving")
          .attr("cx", startPt.x)
          .attr("cy", startPt.y)
          .attr("r", 7)
          .attr("fill", COLOR_LEFT)
          .node() as SVGCircleElement;
      }

      // ── Clock ────────────────────────────────────────────────
      const g = svg
        .append("g")
        .attr("transform", `translate(${width - 16},${height - 16})`);

      g.append("text")
        .attr("class", "clock-date")
        .attr("y", -52)
        .text("2022.03.05 驚蟄");

      clockTimeRef.current = g
        .append("text")
        .attr("class", "clock-time")
        .attr("y", -16)
        .text(toTimeStr(CLOCK_START))
        .node() as SVGTextElement;
    });
  }, []);

  // Scroll → dot + clock
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const routePath = routePathRef.current;
      const dot = dotMovingRef.current;
      if (!routePath || !dot || totalLengthRef.current === 0) return;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const progress = Math.max(
        0,
        Math.min(
          1,
          (window.scrollY - sectionTop) /
            (section.offsetHeight - window.innerHeight),
        ),
      );

      // Dot
      const pt = routePath.getPointAtLength(progress * totalLengthRef.current);
      dot.setAttribute("cx", String(pt.x));
      dot.setAttribute("cy", String(pt.y));
      dot.setAttribute(
        "fill",
        d3.interpolateRgb(COLOR_LEFT, COLOR_RIGHT)(progress),
      );

      // Clock
      const totalMin = Math.round(
        CLOCK_START + progress * (CLOCK_END - CLOCK_START),
      );
      if (clockTimeRef.current)
        clockTimeRef.current.textContent = toTimeStr(totalMin);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative z-[2]"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 md:px-16">
        <div
          className="w-full max-w-3xl rounded-2xl overflow-hidden"
          style={{ height: 430 }}
        >
          <style>{styles}</style>
          <svg
            ref={svgRef}
            className="parhelion-map w-full h-full"
            style={{ display: "block" }}
          />
        </div>
      </div>
    </div>
  );
}
