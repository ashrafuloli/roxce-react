import React from 'react';
import { images } from '../../../utilities/Images';

const BlogHomeOne = () => {
    return (
        <>
            <section class="blog__area grey-bg pt-125 pb-90">
            <div class="container">
               <div class="row">
                  <div class="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                     <div class="section__title-wrapper mb-70 text-center">
                        <span class="section__title-pre center">News & Blog</span>
                        <h2 class="section__title">Our Latest News Blog Articles & Tips</h2>
                     </div>
                  </div>
               </div>
               <div class="row">
                  <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                     <div class="blog__item white-bg mb-30">
                        <div class="blog__thumb fix w-img">
                           <a href="blog-details.html">
                              <img src={images.blog1} alt=""/>
                           </a>
                        </div>
                        <div class="blog__content p-relative">
                           <div class="blog__meta">
                              <span class="author">
                                 <a href="#">admin</a>
                              </span>
                           </div>
                           <div class="blog__meta">
                              <span class="date">
                                 <span>25</span>
                                 nov   
                              </span>
                           </div>
                           <h3 class="blog__title">
                              <a href="blog-details.html">How To Build A Vue Survey App Using Firebase Authent Eication And Database</a>
                           </h3>
                           <a href="blog-details.html" class="link-btn-2 pink">
                              read more
                              <i class="far fa-arrow-right"></i>
                              <i class="far fa-arrow-right"></i>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                     <div class="blog__item white-bg mb-30">
                        <div class="blog__thumb fix w-img">
                           <a href="blog-details.html">
                              <img src={images.blog2} alt=""/>
                           </a>
                        </div>
                        <div class="blog__content p-relative">
                           <div class="blog__meta">
                              <span class="author">
                                 <a href="#">admin</a>
                              </span>
                           </div>
                           <div class="blog__meta">
                              <span class="date">
                                 <span>25</span>
                                 nov   
                              </span>
                           </div>
                           <h3 class="blog__title">
                              <a href="blog-details.html">Micro Typography How To Space & Kern Punctuations Marks And Other Symbol</a>
                           </h3>
                           <a href="blog-details.html" class="link-btn-2 pink">
                              read more
                              <i class="far fa-arrow-right"></i>
                              <i class="far fa-arrow-right"></i>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                     <div class="blog__item white-bg mb-30">
                        <div class="blog__thumb fix w-img">
                           <a href="blog-details.html">
                              <img src={images.blog3} alt=""/>
                           </a>
                        </div>
                        <div class="blog__content p-relative">
                           <div class="blog__meta">
                              <span class="author">
                                 <a href="#">admin</a>
                              </span>
                           </div>
                           <div class="blog__meta">
                              <span class="date">
                                 <span>25</span>
                                 nov   
                              </span>
                           </div>
                           <h3 class="blog__title">
                              <a href="blog-details.html">Painting is the practice of applying paint, pigment, color or other medium </a>
                           </h3>
                           <a href="blog-details.html" class="link-btn-2 pink">
                              read more
                              <i class="far fa-arrow-right"></i>
                              <i class="far fa-arrow-right"></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        </>
    );
};

export default BlogHomeOne;