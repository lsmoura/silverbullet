import { AssetBundle } from "./bundle.ts";
import { assertEquals } from "../../test_deps.ts";

Deno.test("Asset bundle", () => {
  const assetBundle = new AssetBundle();
  assetBundle.writeTextFileSync("test.txt", "Sup yo");
  assertEquals("text/plain", assetBundle.getMimeType("test.txt"));
  assertEquals("Sup yo", assetBundle.readTextFileSync("test.txt"));
  const buf = new Uint8Array(3);
  buf[0] = 1;
  buf[1] = 2;
  buf[2] = 3;
  assetBundle.writeFileSync("test.bin", buf);
  assertEquals("application/octet-stream", assetBundle.getMimeType("test.bin"));
  assertEquals(buf, assetBundle.readFileSync("test.bin"));
});
