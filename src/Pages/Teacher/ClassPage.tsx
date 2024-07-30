import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import 'react-calendar/dist/Calendar.css'
import { TeachersAttendanceJournal } from '../../Components/TeachersAttendanceJournal/TeachersAttendanceJournal'

type Exam = {
  id: number
  name: string
}

interface Topic {
  id: number
  title: string
  videos: Video1[]
}

interface Video1 {
  id: number
  title: string
  url: string
}

type Video = {
  id: number
  name: string
  title: string
  link: string
}

const fetchTopics: Topic[] = [
  {
    id: 1,
    title: 'Duplicate',
    videos: [
      {
        id: 1,
        title: 'video1',
        url: 'https://www.youtube.com/embed/jhiY62jG45o',
      },
      {
        id: 2,
        title: 'video2',
        url: 'https://www.youtube.com/embed/jhiY62jG45o',
      },
      {
        id: 3,
        title: 'video3',
        url: 'https://www.youtube.com/embed/jhiY62jG45o',
      },
    ],
  },
  {
    id: 2,
    title: 'Divided',
    videos: [
      {
        id: 1,
        title: 'video1',
        url: 'https://www.youtube.com/embed/jhiY62jG45o',
      },
      {
        id: 2,
        title: 'video2',
        url: 'https://www.youtube.com/embed/jhiY62jG45o',
      },
      {
        id: 3,
        title: 'video3',
        url: 'https://www.youtube.com/embed/jhiY62jG45o',
      },
    ],
  },
]

const ClassPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [view, setView] = useState<'exams' | 'videos' | 'Attendance journal'>(
    'exams'
  )
  const [exams, setExams] = useState<Exam[]>([
    { id: 1, name: 'Exam 1' },
    { id: 2, name: 'Exam 2' },
  ])

  const [topics, setTopics] = useState<Topic[]>(fetchTopics)

  const [videos, setVideos] = useState<Video[]>([
    {
      id: 1,
      name: 'Video 1',
      title: 'Video Title 1',
      link: 'https://example.com/video1',
    },
    {
      id: 2,
      name: 'Video 2',
      title: 'Video Title 2',
      link: 'https://example.com/video2',
    },
  ])
  const [expandedTopicId, setExpandedTopicId] = useState<number | null>(null)

  const addExam = () => {
    const newExam = { id: exams.length + 1, name: `Exam ${exams.length + 1}` }
    setExams([...exams, newExam])
  }

  const addVideo = () => {
    const newVideo = {
      id: videos.length + 1,
      name: `Video ${videos.length + 1}`,
      title: `Video Title ${videos.length + 1}`,
      link: 'https://example.com/newvideo',
    }
    setVideos([...videos, newVideo])
  }

  const addTopic = () => {
    //  const newVideo = {
    //    id: videos.length + 1,
    //    name: `Video ${videos.length + 1}`,
    //    title: `Video Title ${videos.length + 1}`,
    //    link: "https://example.com/newvideo",
    //  };
    //  setVideos([...videos, newVideo]);
  }

  const toggleVideoDetails = (id: number) => {
    setExpandedTopicId(expandedTopicId === id ? null : id)
  }

  const editTopic = (id: number) => {
    // Logic to edit video
    console.log(`Edit Topic ${id}`)
  }

  const deleteTopic = (id: number) => {
    console.log(`Delete Topic ${id}`)
    // setVideos(videos.filter((video) => video.id !== id));
  }

  const editVideo = (id: number) => {
    // Logic to edit video
    console.log(`Edit video ${id}`)
  }

  const deleteVideo = (id: number) => {
    console.log(`Delete video ${id}`)
    setVideos(videos.filter((video) => video.id !== id))
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Class {id}</h1>

      <div className="mb-4">
        <button
          className={`px-4 py-2 mr-2 ${
            view === 'exams' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setView('exams')}
        >
          Exams
        </button>
        <button
          className={`px-4 py-2 ${
            view === 'videos' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setView('videos')}
        >
          Videos
        </button>

        <button
          className={`px-4 py-2 ${
            view === 'Attendance journal'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200'
          }`}
          onClick={() => setView('Attendance journal')}
        >
          Attendance journal
        </button>
      </div>

      {view === 'exams' && (
        <div>
          <ul className="bg-white shadow-md rounded-lg p-4 mb-4">
            {exams.map((exam) => (
              <li key={exam.id} className="border-b py-2 last:border-b-0">
                {exam.name}
              </li>
            ))}
          </ul>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={addExam}
          >
            Add Exam
          </button>
        </div>
      )}

      {view === 'videos' && (
        <div>
          <ul className="bg-white shadow-md rounded-lg p-4 mb-4">
            {topics.map((topic) => (
              <li key={topic.id} className="border-b py-2 last:border-b-0">
                <div className="flex justify-between items-center">
                  <span
                    onClick={() => toggleVideoDetails(topic.id)}
                    className="cursor-pointer text-blue-500 hover:underline"
                  >
                    Unit: {topic.title}
                  </span>
                  <div>
                    <button
                      className="px-2 py-1 text-sm text-white bg-blue-500 rounded mr-2"
                      onClick={() => editTopic(topic.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-2 py-1 text-sm text-white bg-red-500 rounded"
                      onClick={() => deleteTopic(topic.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                {expandedTopicId === topic.id && (
                  <div>
                    {topic.videos.map((video) => (
                      <div
                        key={video.id}
                        className="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded"
                      >
                        <div>
                          <p className="font-semibold">{video.title}</p>

                          <div className="w-1/2 aspect-square">
                            <iframe
                              src={video.url}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            />
                          </div>
                        </div>
                        <p>
                          Descripuon: Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Assumenda, neque.
                        </p>
                        <div>
                          <button
                            className="px-2 py-1 text-sm text-white bg-purple-500 rounded mr-2 mb-2"
                            onClick={() => editVideo(video.id)}
                          >
                            Edit
                          </button>
                          <button
                            className="px-2 py-1 text-sm text-white bg-red-500 rounded"
                            onClick={() => deleteVideo(video.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-center items-center my-3">
                      <button
                        className="px-4 py-2 bg-green-500 text-white rounded"
                        onClick={addVideo}
                      >
                        Add Video
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={addTopic}
          >
            Add Topic
          </button>
        </div>
      )}

      {view === 'Attendance journal' && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Attendance Journal</h2>
          <TeachersAttendanceJournal />
        </div>
      )}
    </div>
  )
}

export default ClassPage
