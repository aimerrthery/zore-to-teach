// 入口模块：负责"召集"所有功能模块并启动它们
// 其他文件只提供函数（export），真正开工在这里统一调用

import { initNav } from "./nav.js";
import { initCardsAnim } from "./cards.js";
import { initScoreAnim } from "./score.js";

document.addEventListener("DOMContentLoaded", function () {
  initNav();
  initCardsAnim();
  initScoreAnim();
});
