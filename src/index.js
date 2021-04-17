// Test import of a JavaScript module
import { appPublic } from "./js/app";

const root = document.querySelector("#root");
const pp = appPublic.publicApp;

appPublic.publicinItilizedApp(root);
appPublic.publicRun();
