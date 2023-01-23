import React from "react";
import "./carousel.css";
import { useEffect, useContext, useState } from "react";
import { SubjectContext } from "./../../context/subject";

const Carousel = () => {
  const { getAllSubjects, coursesType } = useContext(SubjectContext);

  useEffect(() => {
    getAllSubjects();
  }, []);
  return (
    <div>
      <section>
        <div class="container">
          <div class="carousel">
            <input type="radio" name="slides" checked="checked" id="slide-1" />
            <input type="radio" name="slides" id="slide-2" />
            <input type="radio" name="slides" id="slide-3" />
            <input type="radio" name="slides" id="slide-4" />
            <input type="radio" name="slides" id="slide-5" />
            <input type="radio" name="slides" id="slide-6" />
            <input type="radio" name="slides" id="slide-7" />
            <ul class="carousel__slides">
              <li class="carousel__slide">
                <figure>
                  <div>
                    <img src={coursesType[0].subject_pic} alt="" />
                  </div>
                  <figcaption>
                    {coursesType[0].description}
                    <span class="credit">level: {coursesType[0].level}</span>
                  </figcaption>
                </figure>
              </li>
              <li class="carousel__slide">
                <figure>
                  <div>
                    <img src={coursesType[1].subject_pic} alt="" />
                  </div>
                  <figcaption>
                    <div className="container-scroll">
                      <div class="scrollbar" id="scrollbar2">
                        <div>{coursesType[1].description}</div>
                      </div>
                    </div>
                    <span class="credit">level: {coursesType[1].level}</span>
                  </figcaption>
                </figure>
              </li>
              <li class="carousel__slide">
                <figure>
                  <div>
                    <img src={coursesType[2].subject_pic} alt="" />
                  </div>
                  <figcaption>
                    {coursesType[2].description}
                    <span class="credit">level: {coursesType[2].level}</span>
                  </figcaption>
                </figure>
              </li>
              <li class="carousel__slide">
                <figure>
                  <div>
                    <img src={coursesType[3].subject_pic} alt="" />
                  </div>
                  <figcaption>
                    {coursesType[3].description}
                    <span class="credit">level: {coursesType[3].level}</span>
                  </figcaption>
                </figure>
              </li>
              <li class="carousel__slide">
                <figure>
                  <div>
                    <img src={coursesType[4].subject_pic} alt="" />
                  </div>
                  <figcaption>
                    {coursesType[4].description}
                    <span class="credit">level: {coursesType[4].level}</span>
                  </figcaption>
                </figure>
              </li>
              <li class="carousel__slide">
                <figure>
                  <div>
                    <img src={coursesType[5].subject_pic} alt="" />
                  </div>
                  <figcaption>
                    {coursesType[5].description}
                    <span class="credit">level: {coursesType[5].level}</span>
                  </figcaption>
                </figure>
              </li>
              <li class="carousel__slide">
                <figure>
                  <div>
                    <img src={coursesType[6].subject_pic} alt="" />
                  </div>
                  <figcaption>
                    {coursesType[6].description}
                    <span class="credit">level: {coursesType[6].level}</span>
                  </figcaption>
                </figure>
              </li>
            </ul>
            <ul class="carousel__thumbnails">
              <li>
                <label for="slide-1">
                  <img src={coursesType[6].subject_pic} alt="" />
                </label>
              </li>
              <li>
                <label for="slide-2">
                  <img src={coursesType[6].subject_pic} alt="" />
                </label>
              </li>
              <li>
                <label for="slide-3">
                  <img src={coursesType[6].subject_pic} alt="" />
                </label>
              </li>
              <li>
                <label for="slide-4">
                  <img src={coursesType[6].subject_pic} alt="" />
                </label>
              </li>
              <li>
                <label for="slide-5">
                  <img src={coursesType[6].subject_pic} alt="" />
                </label>
              </li>
              <li>
                <label for="slide-6">
                  <img src={coursesType[6].subject_pic} alt="" />
                </label>
              </li>
              <li>
                <label for="slide-6">
                  <img src={coursesType[6].subject_pic} alt="" />
                </label>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
