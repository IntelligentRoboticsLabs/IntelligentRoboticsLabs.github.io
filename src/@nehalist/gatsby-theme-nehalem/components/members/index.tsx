import React, {CSSProperties, FunctionComponent, ReactNode} from "react";
import {Main, Grid, GridImg, GridImgImage, Map} from "./style";
import "../../styles/about-style.css"
import IntellRobotsLabTeam from "../../../../../content/assets/images/intellrobotslab_team.jpg"
import Paco from "../../../../../content/assets/images/paco.jpg"
import Jonatan from "../../../../../content/assets/images/jonatan.jpg"
import JoseMiguel from "../../../../../content/assets/images/josemiguel.jpg"
import Lorena from "../../../../../content/assets/images/lorena.jpg"
import Fernando from "../../../../../content/assets/images/fernando.jpg"
import Manuel from "../../../../../content/assets/images/manuel.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

function mouseOverEvent(e) {
  e.target.style.width = '60%';
}
function mouseOutEvent(e) {
  e.target.style.width = '50%';
}

export const Members = () => (
  <Main>
    <script src="./script.js" type="text/javascript" />

    <Grid>
      <GridImg>
        <GridImgImage>
          <a href="https://gsyc.urjc.es/~fmartin/" target="_blank">
            <img className="gridimg" onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} width="50%" src={Paco} />
          </a>
        </GridImgImage>
        <div class="name">
          <p>
            <strong>Francisco Martín</strong>
          </p>
        </div>
        <div class="definition">
          <p>
            <strong>Associate Professor</strong>
          </p>
        </div>
        <div class="email">
          <div class="mail-icon">
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
          </div>
          <p>francisco.rico@urjc.es</p>
        </div>
      </GridImg>
      <GridImg>
        <GridImgImage>
          <a href="https://sites.google.com/view/jmguerrero" target="_blank">
            <img class="gridimg" onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} src={JoseMiguel} width="50%" />
          </a>
        </GridImgImage>
        <div class="name">
          <p>
            <strong>José Miguel Guerrero</strong>
          </p>
        </div>
        <div class="definition">
          <p>
            <strong>Assistant Professor</strong>
          </p>
        </div>
        <div class="email">
          <div class="mail-icon">
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
          </div>
          <p>josemiguel.guerrero@urjc.es</p>
        </div>
      </GridImg>
      <GridImg>
        <GridImgImage>
          <a href ="https://jginesclavero.github.io" target="_blank">
            <img class="gridimg" onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} src={Jonatan} width="50%" />
          </a>
        </GridImgImage>
        <div class="name">
          <p>
            <strong>Jonatan Ginés</strong>
          </p>
        </div>
        <div class="definition">
          <p>
            <strong>PhD Candidate</strong>
          </p>
        </div>
        <div class="email">
          <div class="mail-icon">
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
          </div>
          <p>jonatan.gines@urjc.es</p>
        </div>
      </GridImg>
      <GridImg>
        <GridImgImage>
          <img class="gridimg" onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} src={Fernando} width="50%" />
        </GridImgImage>
        <div class="name">
          <p>
            <strong>Fernando González</strong>
          </p>
        </div>
        <div class="definition">
          <p>
            <strong>Intern</strong>
          </p>
        </div>
        <div class="email">
          <div class="mail-icon">
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
          </div>
          <p>f.gonzalezr.2016@alumnos.urjc.es</p>
        </div>
      </GridImg>
      <GridImg>
        <GridImgImage>
          <img class="gridimg" onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} src={Lorena} width="50%" />
        </GridImgImage>
        <div class="name">
          <p>
            <strong>Lorena Bajo</strong>
          </p>
        </div>
        <div class="definition">
          <p>
            <strong>Project Engineer</strong>
          </p>
        </div>
        <div class="email">
          <div class="mail-icon">
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
          </div>
          <p>lorena.bajo@urjc.es</p>
        </div>
      </GridImg>
      <GridImg>
        <GridImgImage>
          <a href="https://www.fernandezcarmona.net" target="_blank">
            <img class="gridimg" onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} src={Manuel} width="50%" />            
          </a>
        </GridImgImage>
        <div class="name">
          <p>
            <strong>Manuel Fernández</strong>
          </p>
        </div>
        <div class="definition">
          <p>
            <strong>Assistant Professor</strong>
          </p>
        </div>
        <div class="email">
          <div class="mail-icon">
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
          </div>
          <p>manuel.fernandezc@urjc.es</p>
        </div>
      </GridImg>
    </Grid>
    <Map>
      <div class="map-tittle">
        <p>
          Where to find us
        </p>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.7073176428366!2d-3.8216746487588584!3d40.28225137162937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418b7f310d2417%3A0x8bb94231c370b55!2sUniversidad%20Rey%20Juan%20Carlos%20Campus%20de%20Fuenlabrada!5e0!3m2!1ses!2ses!4v1599824570268!5m2!1ses!2ses" width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </Map>
  </Main>
);
