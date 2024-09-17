// Подключение основного файла стилей
import "../scss/style.scss";

import "./jquery/jquery-3.7.1.min.js";
import "./jquery/slick.min.js";
import "./jquery/slider.js";
import "./base/burger.js";
import { showBlock, clickPhoto, getPosts } from "./modules/functions.js";

showBlock(1);
clickPhoto();
getPosts();
