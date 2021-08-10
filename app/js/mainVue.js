const mainvue = Vue.createApp({
    data: function() {
        return {
            tester: "just testing",
            followers: [
                {class: 'facebook', name: '@nathanf', num: '1987', status: 12, type: 'Followers', ref: 'https://www.facebook.com/'},
                {class: 'twitter', name: '@nathanf', num: '1044', status: 99, type: 'Followers', ref: 'https://twitter.com/home'},
                {class: 'instagram', name: '@realnathanf', num: '11k', status: 1099, type: 'Followers', ref: 'https://www.instagram.com/'},
                {class: 'youtube', name: 'Nathan F.', num: '8239', status: -144, type: 'Subscribers', ref: 'https://www.youtube.com/'}
            ],
            stats: [
                {type: 'Page Views', logo: '../../images/icon-facebook.svg', num: '87', status: 3 },
                {type: 'Likes', logo: '../../images/icon-facebook.svg', num: '52', status: -2 },
                {type: 'Likes', logo: '../../images/icon-instagram.svg', num: '5462', status: 2257 },
                {type: 'Profile Views', logo: '../../images/icon-instagram.svg', num: '52k', status: 1375 },
                {type: 'Retweets', logo: '../../images/icon-twitter.svg', num: '117', status: 303 },
                {type: 'Likes', logo: '../../images/icon-twitter.svg', num: '507', status: 553 },
                {type: 'Likes', logo: '../../images/icon-youtube.svg', num: '107', status: -19 },
                {type: 'Total Views', logo: '../../images/icon-youtube.svg', num: '1407', status: -12 }
            ],
            theme: 'light-theme'
        }
    },
    methods: {
        themeSwitcher(theme) {
            this.theme = theme.new
            document.body.classList.remove(theme.old)
            document.getElementById("main").classList.remove(theme.old)

            document.body.classList.add(theme.new)
            document.getElementById("main").classList.add(theme.new)
        }
    }
})