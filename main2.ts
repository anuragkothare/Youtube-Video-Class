// Video Class
class YtubeVideo {
  constructor(
    private title: string,
    private publishDate: Date,
    private views: number,
    private likes: number,
    private dislikes: number,
    private description: string,
    private type: string,
    private uploader?: YtUser,
    private listOfComments?: VideoComment[]
  ) {
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

  // Video Name
  getTitle = (): string => {
    return this.title;
  };

  // Published On
  getPublishDate = (): Date => {
    return this.publishDate;
  };

  // Views
  getViews = (): number => {
    return this.views;
  };

  // Likes
  getLikes = (): number => {
    return this.likes;
  };

  // Dislikes
  getDislikes = (): number => {
    return this.dislikes;
  };

  // Description
  getDescription = (): string => {
    return this.description;
  };

  setDescription = (text: string) => {
    this.description = text;
  };

  // Type Of Video
  getType = (): string => {
    return this.type;
  };

  // Uplaoder
  getUploader = (): YtUser => {
    return this.uploader;
  };

  // List of Comments
  getListOfComments = (): VideoComment[] => {
    return this.listOfComments;
  };
}

// User/Channel Class
class YtUser {
  constructor(
    private username,
    private channelType: string,
    private about: string,
    private discussion: string,
    private playlist?: YtubeVideo[],
    private listOfSubscribers?: YtUser[],
    private relatedVideos?: YtubeVideo[]
  ) {
    this.username - username;
    this.listOfSubscribers = listOfSubscribers;
    this.channelType = channelType;
    this.about = about;
    this.discussion = discussion;
  }

  // Username
  getUserName = (): string => {
    return this.username;
  };

  // Videos
  getPlayListVideos = (): YtubeVideo[] => {
    return this.playlist;
  };

  // Adding Videos in playlist
  addVideo = (video: YtubeVideo) => {
    this.playlist.push(video);
  };
  getDiscuss = (): string => {
    return this.discussion;
  };

  // ChannelType
  getChanelType = (): string => {
    return this.channelType;
  };

  // About
  getAbout = (): string => {
    return this.about;
  };

  getRelatedVideos = (user: YtUser): YtubeVideo[] => {
    // Related Videos
    return user.relatedVideos;
  };
}

// Comment Class
class VideoComment {
  constructor(
    private text: string,
    private likes: number,
    private dislikes: number,
    private publishedOn: Date,
    private user?: string
  ) {
    this.text = text;
    this.likes = likes;
    this.dislikes = likes;
    this.publishedOn = publishedOn;
    this.user = user;
  }

  getText = (): string => {
    return this.text;
  };

  setText = (text: string) => {
    this.text = text;
  };

  getCommentLikes = (): number => {
    return this.likes;
  };

  getCommentDislikes = (): number => {
    return this.dislikes;
  };
}

// Creating Comment Objects
var comment1 = new VideoComment(
  "This Video is so nice and clear",
  4099,
  12,
  new Date("September 2, 2016"),
  user1
);
var comment2 = new VideoComment(
  "I Like his Voice",
  5000,
  11,
  new Date("January 8, 2017"),
  user2
);
var comment3 = new VideoComment(
  "So Funny he is",
  35000,
  911,
  new Date("February 9, 2018"),
  user3
);
var comment4 = new VideoComment(
  "Amazingly Good and Passionate",
  85000,
  211,
  new Date("December 3, 2011"),
  user4
);

// Creating  YT Users
var user1 = new YtUser(
  "Anurag",
  "Knowledge",
  "This channel is about software and web technologies.",
  "Here you can Discuus various doubts and new Stuff",
  youtubeMix,
  [user4, user2, user3]
);

var user2 = new YtUser(
  "Arpit",
  "Travel",
  "Travel with me.See my VLOG.",
  "This channel is so cool and awesome",
  myList,
  [user1, user3, user4]
);

var user3 = new YtUser(
  "VJ Sunny",
  "Music And Fashion",
  "Listen You fav Music Every Day.",
  "The playlists are so good",
  youtubeMix,
  [user2, user1]
);

var user4 = new YtUser(
  "Sprit Guru",
  "Meditation",
  "Follow Mindfullness and get enlightned everyday.",
  "The channel is really for peace lovers",
  spritList,
  [user1, user2, user3]
);

// Creating Videos Objects

var musicVideo = new YtubeVideo(
  "Metallica",
  new Date("June 19, 2018"),
  1900000,
  5000,
  324,
  "This is Video By Heavy Metal Band Mettalica",
  "Music",
  user3,
  [comment1, comment3, comment1]
);

var scienceTech = new YtubeVideo(
  "Into the machines",
  new Date("April 21, 2012"),
  3400000,
  67600,
  900,
  "Science of Machine Working in Industries",
  "Technology&Science",
  user1,
  [comment1, comment3]
);

var fitnessVideo = new YtubeVideo(
  "How to workout in a good way",
  new Date("March 21, 2009"),
  43400000,
  5000,
  86,
  "How to Do Crunches and Lift Weights",
  "Fitness",
  user2,
  [comment1, comment2, comment4]
);

var funnyVideo = new YtubeVideo(
  "Try not to laugh",
  new Date("January 19, 2012"),
  4400000,
  4600,
  890,
  "New Adult Comedy Clips",
  "Comedy",
  user1,
  [comment1, comment3, comment4]
);

var cookVideo = new YtubeVideo(
  "Recepie for Butter Chicken",
  new Date("Jul 11, 2008"),
  21400000,
  89000,
  786,
  "get idea of cooking delecious chicken",
  "Cooking",
  user2,
  [comment1, comment2, comment4]
);

var travelVideo = new YtubeVideo(
  "Travel Japan and its Culture",
  new Date("November 12, 2017"),
  7800000,
  90000,
  126,
  "Don't Tell My Mother",
  "Travel $ Explore",
  user1,
  [comment1, comment4]
);

var spritVideo = new YtubeVideo(
  "Meditation",
  new Date("December 12, 2011"),
  3800000,
  900000,
  136,
  "Do Good Mind Yoga",
  "Spritual Science",
  user4,
  [comment1, comment3, comment2]
);

// Creating Playlist
var toWatch: YtubeVideo[] = [cookVideo, travelVideo];
var youtubeMix: YtubeVideo[] = [musicVideo, funnyVideo];
var myList: YtubeVideo[] = [funnyVideo, cookVideo, musicVideo];
var spritList: YtubeVideo[] = [spritVideo];

// Function To get Video class Information
var printVideoClass = (video: YtubeVideo) => {
  console.log(
    `Video Information: \n
            The video title is: ${video.getTitle()} \n
            Published On: ${video.getPublishDate()} \n
            Views are: ${video.getViews()} \n
            Likes are: ${video.getLikes()} \n
            Dislikes are: ${video.getDislikes()} \n
            Description of Video: ${video.getDescription()} \n
            Genre of Video: ${video.getType()} \n
            Video Uploaded by : ${video.getUploader().getUserName()} \n
            The List Of Comments in the Video are:
             ${video
               .getListOfComments()
               .map((comment, i) => `${comment.getText()}`.trim())
               .join(", ")}

        `
  );
};

// Printing Video Class Information

printVideoClass(musicVideo);
printVideoClass(funnyVideo);
printVideoClass(fitnessVideo);
printVideoClass(travelVideo);
printVideoClass(cookVideo);
printVideoClass(spritVideo);
