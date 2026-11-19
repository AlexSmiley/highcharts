import test from "node:test";
import assert from "node:assert/strict";
import { getPeriodMetrics, monthlyMetrics } from "../src/data.js";
test("aggregates period metrics",()=>{assert.deepEqual(getPeriodMetrics([{revenue:100,orders:2},{revenue:200,orders:3}]),{revenue:300,orders:5,averageOrderValue:60});});
test("handles empty and invalid input",()=>{const expected={revenue:0,orders:0,averageOrderValue:0};assert.deepEqual(getPeriodMetrics([]),expected);assert.deepEqual(getPeriodMetrics(null),expected);});
test("contains twelve positive monthly samples",()=>{assert.equal(monthlyMetrics.length,12);assert.ok(monthlyMetrics.every(x=>x.revenue>0&&x.orders>0));});
