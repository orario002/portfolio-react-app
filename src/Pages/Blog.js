import React, {Component} from "react";

class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sandychiu')
        .then((res) => res.json())
        .then((data) => {
            // Fillter the array
            const res = data.items; //This is an array with the content. No feed, no info about author etc..
            const posts = res.filter(item => item.categories.length > 0); // That's the main trick* !

            function toText(node) {
                let tag = document.createElement('div');
                tag.innerHTML = node;
                node = tag.innerText;
                return node
            }

            function shortenText(text, startingPoint, maxLength) {
                return text.length > maxLength ?
                    text.slice(startingPoint, maxLength) :
                    text
            }

            let output = '';
            posts.forEach((item) => {
                output += `
         <li class="blog__post col-md-3  col-12" >
            <a href="${item.link}">
               <img src="${item.thumbnail}" class="blog__topImg"/>
               <div class="blog__content">
                  <div class="blog_preview">
                     <h2 class="blog__title">${shortenText(item.title, 0, 100)}</h2>
                     <p class="blog__intro">${shortenText(toText(item.content), 0, 100) + '...'}</p>
                  </div>
                  <hr>
                  <div class="blog__info">
                     <span class="blog__author">${item.author}</span>
                     <span class="blog__date">${shortenText(item.pubDate, 0, 10)}</span>
                  </div>
               </div>
            <a/>
         </li>`
            });
            document.querySelector('.blog__slider').innerHTML = output
        })
    }

    render() {
        return (
            <section id="blog" class="blog">
                <div class="blog__header">
                    <h2 class="title">Medium posts</h2>
                </div>
                <ul class="blog__slider row">
                    Posts go here
                </ul>
                {/*<ul class="blog__counter">*/}
                {/*<li class="blog__counterItem blog__counterItem-active"></li>*/}
                {/*<li class="blog__counterItem"></li>*/}
                {/*<li class="blog__counterItem"></li>*/}
                {/*</ul>*/}
            </section>
        )
    }
};

export default Blog;

