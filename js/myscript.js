const { createApp } = Vue;

createApp ({
    data() {
        return {
            images : [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morales',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            activeIndex : 0,
            isHovering: false,
            isAutoplaying: true,
            isReverse: false,
            autoplayButtonClasses: 'fa-solid fa-pause',
            reverseButtonClasses: 'fa-solid fa-arrow-rotate-left',
        }
    },
    methods: {
        previousImage() {
            if (this.isHovering === false) {
                if (this.activeIndex === 0) {
                    this.activeIndex = this.images.length - 1;
                } else {
                    this.activeIndex--;
                }
            }
        },
        nextImage() {
            if (this.isHovering === false) {
                if (this.activeIndex === this.images.length - 1){
                    this.activeIndex = 0;
                } else {
                    this.activeIndex++;
                }
            }
        },
        thumbnailClick(index) {
            this.activeIndex = index;
        },
        autoplay() {
            this.imageSlide = setInterval(() => this.nextImage(), 3000);
            this.reverseButtonClasses = 'fa-solid fa-arrow-rotate-left';
        },
        autoplayReverse() {
            if (this.isReverse === false) {
                clearInterval(this.imageSlide);
                this.imageSlideReverse = setInterval(() => this.previousImage(), 3000);
                this.reverseButtonClasses = 'fa-solid fa-arrow-rotate-right';
            } else {
                clearInterval(this.imageSlideReverse);
                this.autoplay();
            }
            this.isReverse = !this.isReverse;
        },
        toggleAutoplay() {
            if (this.isReverse === false) {
                if (this.isAutoplaying) {
                    clearInterval(this.imageSlide);
                    this.autoplayButtonClasses = 'fa-solid fa-play';
                } else {
                    this.autoplay();
                    this.autoplayButtonClasses = 'fa-solid fa-pause';
                }
            } else {
                if (this.isAutoplaying) {
                    clearInterval(this.imageSlideReverse);
                    this.autoplayButtonClasses = 'fa-solid fa-play';
                } else {
                    this.imageSlideReverse = setInterval(() => this.previousImage(), 3000);
                    this.autoplayButtonClasses = 'fa-solid fa-pause';
                }
            }
            this.isAutoplaying = !this.isAutoplaying;
        }
    },
    mounted: function() {
        this.autoplay();
    }
}) .mount('#app');