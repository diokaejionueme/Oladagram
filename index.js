const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

/* Generate Random user from posts */

const randUser = Math.floor(Math.random() * 3 );


var elemAvatar = document.querySelector('.two');
elemAvatar.src = posts[randUser].avatar

var elemName = document.querySelector('.name');
elemName.innerHTML = posts[randUser].name;

var elemLocation = document.querySelector('.location')
elemLocation.textContent =  posts[randUser].location ;

var elemImage = document.querySelector('.main-img')
elemImage.src = posts[randUser].post;

var elemLikes = document.getElementById('likes');
elemLikes.innerHTML = `${posts[randUser].likes} likes`;

var elemID = document.getElementById('user-id')
elemID.textContent= posts[randUser].username;


var elemComments = document.getElementById('comments')
elemComments.textContent= elemID.setAttribute('class', 'rand-id').textContent +  " " +posts[randUser].comment;








