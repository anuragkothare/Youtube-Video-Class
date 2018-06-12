// Video Class
var YtubeVideo = /** @class */ (function () {
    function YtubeVideo(title, publishDate, views, likes, dislikes, description, type, uploader, listOfComments) {
        var _this = this;
        this.title = title;
        this.publishDate = publishDate;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.description = description;
        this.type = type;
        this.uploader = uploader;
        this.listOfComments = listOfComments;
        // Video Name
        this.getTitle = function () {
            return _this.title;
        };
        // Published On
        this.getPublishDate = function () {
            return _this.publishDate;
        };
        // Views
        this.getViews = function () {
            return _this.views;
        };
        // Likes
        this.getLikes = function () {
            return _this.likes;
        };
        // Dislikes
        this.getDislikes = function () {
            return _this.dislikes;
        };
        // Description
        this.getDescription = function () {
            return _this.description;
        };
        this.setDescription = function (text) {
            _this.description = text;
        };
        // Type Of Video
        this.getType = function () {
            return _this.type;
        };
        // Uplaoder
        this.getUploader = function () {
            return _this.uploader;
        };
        // List of Comments
        this.getListOfComments = function () {
            return _this.listOfComments;
        };
        this.title = title;
        this.publishDate = publishDate;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.description = description;
        this.type = type;
        this.listOfComments = listOfComments;
        this.uploader = uploader;
    }
    return YtubeVideo;
}());
// User/Channel Class
var YtUser = /** @class */ (function () {
    function YtUser(username, channelType, about, discussion, playlist, listOfSubscribers, relatedVideos) {
        var _this = this;
        this.username = username;
        this.channelType = channelType;
        this.about = about;
        this.discussion = discussion;
        this.playlist = playlist;
        this.listOfSubscribers = listOfSubscribers;
        this.relatedVideos = relatedVideos;
        // Username
        this.getUserName = function () {
            return _this.username;
        };
        // Videos
        this.getPlayListVideos = function () {
            return _this.playlist;
        };
        // Adding Videos in playlist
        this.addVideo = function (video) {
            _this.playlist.push(video);
        };
        this.getDiscuss = function () {
            return _this.discussion;
        };
        // ChannelType
        this.getChanelType = function () {
            return _this.channelType;
        };
        // About
        this.getAbout = function () {
            return _this.about;
        };
        this.getRelatedVideos = function (user) {
            // Related Videos
            return user.relatedVideos;
        };
        this.username - username;
        this.listOfSubscribers = listOfSubscribers;
        this.channelType = channelType;
        this.about = about;
        this.discussion = discussion;
    }
    return YtUser;
}());
// Comment Class
var VideoComment = /** @class */ (function () {
    function VideoComment(text, likes, dislikes, publishedOn, user) {
        var _this = this;
        this.text = text;
        this.likes = likes;
        this.dislikes = dislikes;
        this.publishedOn = publishedOn;
        this.user = user;
        this.getText = function () {
            return _this.text;
        };
        this.setText = function (text) {
            _this.text = text;
        };
        this.getCommentLikes = function () {
            return _this.likes;
        };
        this.getCommentDislikes = function () {
            return _this.dislikes;
        };
        this.text = text;
        this.likes = likes;
        this.dislikes = likes;
        this.publishedOn = publishedOn;
        this.user = user;
    }
    return VideoComment;
}());
// Creating Comment Objects
var comment1 = new VideoComment("This Video is so nice and clear", 4099, 12, new Date("September 2, 2016"), user1);
var comment2 = new VideoComment("I Like his Voice", 5000, 11, new Date("January 8, 2017"), user2);
var comment3 = new VideoComment("So Funny he is", 35000, 911, new Date("February 9, 2018"), user3);
var comment4 = new VideoComment("Amazingly Good and Passionate", 85000, 211, new Date("December 3, 2011"), user4);
// Creating  YT Users
var user1 = new YtUser("Anurag", "Knowledge", "This channel is about software and web technologies.", "Here you can Discuus various doubts and new Stuff", youtubeMix, [user4, user2, user3]);
var user2 = new YtUser("Arpit", "Travel", "Travel with me.See my VLOG.", "This channel is so cool and awesome", myList, [user1, user3, user4]);
var user3 = new YtUser("VJ Sunny", "Music And Fashion", "Listen You fav Music Every Day.", "The playlists are so good", youtubeMix, [user2, user1]);
var user4 = new YtUser("Sprit Guru", "Meditation", "Follow Mindfullness and get enlightned everyday.", "The channel is really for peace lovers", spritList, [user1, user2, user3]);
// Creating Videos Objects
var musicVideo = new YtubeVideo("Metallica", new Date("June 19, 2018"), 1900000, 5000, 324, "This is Video By Heavy Metal Band Mettalica", "Music", user3, [comment1, comment3, comment1]);
var scienceTech = new YtubeVideo("Into the machines", new Date("April 21, 2012"), 3400000, 67600, 900, "Science of Machine Working in Industries", "Technology&Science", user1, [comment1, comment3]);
var fitnessVideo = new YtubeVideo("How to workout in a good way", new Date("March 21, 2009"), 43400000, 5000, 86, "How to Do Crunches and Lift Weights", "Fitness", user2, [comment1, comment2, comment4]);
var funnyVideo = new YtubeVideo("Try not to laugh", new Date("January 19, 2012"), 4400000, 4600, 890, "New Adult Comedy Clips", "Comedy", user1, [comment1, comment3, comment4]);
var cookVideo = new YtubeVideo("Recepie for Butter Chicken", new Date("Jul 11, 2008"), 21400000, 89000, 786, "get idea of cooking delecious chicken", "Cooking", user2, [comment1, comment2, comment4]);
var travelVideo = new YtubeVideo("Travel Japan and its Culture", new Date("November 12, 2017"), 7800000, 90000, 126, "Don't Tell My Mother", "Travel $ Explore", user1, [comment1, comment4]);
var spritVideo = new YtubeVideo("Meditation", new Date("December 12, 2011"), 3800000, 900000, 136, "Do Good Mind Yoga", "Spritual Science", user4, [comment1, comment3, comment2]);
// Creating Playlist
var toWatch = [cookVideo, travelVideo];
var youtubeMix = [musicVideo, funnyVideo];
var myList = [funnyVideo, cookVideo, musicVideo];
var spritList = [spritVideo];
// Function To get Video class Information
var printVideoClass = function (video) {
    console.log("Video Information: \n\n            The video title is: " + video.getTitle() + " \n\n            Published On: " + video.getPublishDate() + " \n\n            Views are: " + video.getViews() + " \n\n            Likes are: " + video.getLikes() + " \n\n            Dislikes are: " + video.getDislikes() + " \n\n            Description of Video: " + video.getDescription() + " \n\n            Genre of Video: " + video.getType() + " \n\n            Video Uploaded by : " + video.getUploader().getUserName() + " \n\n            The List Of Comments in the Video are:\n             " + video
        .getListOfComments()
        .map(function (comment, i) { return ("" + comment.getText()).trim(); })
        .join(", ") + "\n\n        ");
};
// Printing Video Class Information
printVideoClass(musicVideo);
printVideoClass(funnyVideo);
printVideoClass(fitnessVideo);
printVideoClass(travelVideo);
printVideoClass(cookVideo);
printVideoClass(spritVideo);
