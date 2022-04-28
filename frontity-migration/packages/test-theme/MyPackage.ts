import { MergePackages } from "frontity/types";
// import { Package } from "frontity/types";
import Source from "@frontity/source/types";
import Router from "@frontity/router/types";

interface MyPackage {
  state: {
    router?: Router["state"]["router"]; // <- here
    myPackage: {
      someState: string;
    };
  };
  // actions: {
  //   myPackage: {
  //     someAction: Action<MyPackage>;
  //   };
  // };
}

export default MyPackage;

export type TestPackages = MergePackages<Source, Router, MyPackage>;
