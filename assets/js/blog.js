function loadDatas() {

    fetch(`https://raw.githubusercontent.com/TobbyJay/tobbyjay.github.io/master/assets/tobby-stories-copy.json?token=AHX5U36ABQINXCEWMHUDYP3AALTIK`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let output = '';

            for (i = 0; i < data.posts.length; i++) {
                output += `   <div class="col-lg-4">
                                  <div class="blog-item box-border">
                                  <div class="blog-image">
                                <div class="blog-intro">
                                    <img src="${data.posts[i].coverImage}" alt="/">
                                </div>
                                <div class="blog-content">
                                  <ul class="list-inline mt-4">
                                    <li class="list-inline-item">
                                        <i class="lni-calendar data-text-color" data-color="#ff4274"></i>
                                    <span class="text-muted">${data.posts[i].dateAdded} </span>
                                    </li>
                                    <li class="list-inline-item">
                                                                             <i class="lni-calendar data-text-color" data-color="#fbdd62"></i>
                                                                                 <span class="text-muted">${data.posts[i].views}</span>
                                                                         </ul>
                            </div>
                            <h6 class="mb-3"><a class="text-dark" href="javascript:void(0)" target="_blank" >${data.posts[i].title}</a></h6>
                                                               <p class="text-dark">${data.posts[i].contentMarkdown}</p>
                                                                <div class="blog-link">
                                                                        <a class="base-color" href="javascript:void(0)" target="_blank" data-toggle="modal" data-target="#blog-single">Read More...</a>
                                                                  </div>
                                                              </div>
                                                           </div>
                                                     </div>
                               

                 `;

                document.querySelector('.row-blog').innerHTML = output;
            }
        })
        .catch(err => console.log(err));



}






// <!--  Blog Start  -->
// <section id="blog" class="section pp-scrollable blog" data-navigation-tooltip="BLOG">
//     <div class="display-table">
//         <div class="display-content">
//             <div class="container">
//                 <div class="row">
//                     <div class="col-lg-12">
//                         <div class="title-wrapper">
//                             <span>My Blog</span>
//                         </div>
//                         <div class="title-content">
//                             <h2 class="base-color">My Blog</h2>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="row row-blog">
                   
//                 </div>
//                 <div class="row">
//                     <div class="col-12 text-center">
//                         <div class="button-border">
//                             <a href="https://tobby.hashnode.dev" target="_blank" class="pill-button">View More</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>
// <!--   Blog End   -->
