import React from 'react';
import './Recommend.css';

const channels = [
  {
    name: 'Code with Harry',
    url: 'https://www.youtube.com/c/CodeWithHarry',
    thumbnail: 'https://img.youtube.com/vi/5_5oE5lgrhw/0.jpg' // Replace VIDEO_ID with an actual video ID
  },
  {
    name: 'Striver',
    url: 'https://www.youtube.com/@striver_79',
    thumbnail: 'https://img.youtube.com/vi/rHn9af16O_E/0.jpg'
  },
  {
    name: 'Fraz',
    url: 'https://www.youtube.com/@mohammadfraz',
    thumbnail: 'https://img.youtube.com/vi/hORRaq7CNw0/0.jpg'
  },
  {
    name: 'Apna College',
    url: 'https://www.youtube.com/c/ApnaCollegeOfficial',
    thumbnail: 'https://img.youtube.com/vi/1yrh60og6qc/0.jpg'
  },
  {
    name: 'Gate Smashers',
    url: 'https://www.youtube.com/c/GateSmasher',
    thumbnail: 'https://img.youtube.com/vi/5GDTIUVlHB8/0.jpg'
  },
  {
    name: "Jenny's Lectures",
    url: 'https://www.youtube.com/c/JennysLecturesCSIT',
    thumbnail: 'https://img.youtube.com/vi/T7AxM7Vqvaw/0.jpg'
  },
  {
    name: 'Neso Academy',
    url: 'https://www.youtube.com/c/NesoAcademy',
    thumbnail: 'https://img.youtube.com/vi/vBURTt97EkA/0.jpg'
  },
  {
    name: 'Knowledge Gate',
    url: 'https://www.youtube.com/c/KnowledgeGate',
    thumbnail: 'https://img.youtube.com/vi/xw_OuOhjauw/0.jpg'
  },
  {
    name: 'Telusko',
    url: 'https://www.youtube.com/c/Telusko',
    thumbnail: 'https://img.youtube.com/vi/Znmz_WxMxp4/0.jpg'
  },
  {
    name: 'Simple Snippets',
    url: 'https://www.youtube.com/c/SimpleSnippets',
    thumbnail: 'https://img.youtube.com/vi/QaKX6SjU1vg/0.jpg'
  }
];

const Recommend = () => {
  return (
    <div className="recommended-channels">
      <h3>Recommended YouTube Channels</h3>
      <div className="recommended-channels-content">
        {channels.map((channel, index) => (
          <div key={index} className="subject-section">
            <a href={channel.url} target="_blank" rel="noopener noreferrer">
              <div className="channel-box">
                <img
                  src={channel.thumbnail}
                  alt={channel.name}
                  className="channel-thumbnail"
                />
                <div className="channel-name">{channel.name}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Recommend;
