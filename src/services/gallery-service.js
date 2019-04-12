export default class AlbumstoreService {
  data = [
    {
      id: 1,
      source: "/img_2763.jpg",
      title: "First album",
      createdTime: "2 hours ago",
      photoList: [
        {
          id: 1,
          source: "/img_2763.jpg",
          title: "img 1",
          desc:
            "desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc"
        },
        {
          id: 2,
          source: "/img_2763.jpg",
          title: "img 2",
          desc: "desc desc desc"
        },
        {
          id: 3,
          source: "/img_2763.jpg",
          title: "img 11",
          desc: "desc desc desc"
        },
        {
          id: 4,
          source: "/img_2763.jpg",
          title: "img 22",
          desc: "desc desc desc"
        },
        {
          id: 5,
          source: "/img_2763.jpg",
          title: "img 144",
          desc: "desc desc desc"
        },
        {
          id: 6,
          source: "/img_2763.jpg",
          title: "img 4422",
          desc: "desc desc desc"
        },
        {
          id: 7,
          source: "/img_2763.jpg",
          title: "img 611",
          desc: "desc desc desc"
        },
        {
          id: 8,
          source: "/img_2763.jpg",
          title: "img 772",
          desc: "desc desc desc"
        },
        {
          id: 9,
          source: "/img_2763.jpg",
          title: "img 774",
          desc: "desc desc desc"
        }
      ]
    },
    {
      id: 2,
      source: "/img_2763.jpg",
      title: "Second album",
      createdTime: "2 hours ago",
      photoList: [
        {
          id: 43,
          source: "/img_2763.jpg",
          title: "img 3",
          desc: "desc desc desc"
        },
        {
          id: 44,
          source: "/img_2763.jpg",
          title: "img 4",
          desc: "desc desc desc"
        }
      ]
    }
  ];
  getAlbums() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
        // if (Math.random() > 0.75) {
        //   reject(new Error("Error !!!"));
        // } else {
        //   resolve(this.data);
        // }
      }, 10);
    });
  }
}
