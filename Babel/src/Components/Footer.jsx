import React from 'react'

const Footer = () => {
  return (
    <div w-full>
        <div className='flex px-30 py-5 w-full bg-black'>
        <img className='h-6 ml-10' src="https://babeljs.io/img/babel.svg" alt="" />
        <ul className='ml-15 text-white'>
            <li>Docs</li>
            <li>Learn ES2015</li>
        </ul>
        <ul className='ml-60 text-white'>
            <li>Community</li>
            <li>Videos</li>
            <li>User Showcase</li>
            <li>Stack Overflow</li>
            <li>Slack Channel</li>
            <li>X(Twitter)</li>
            <li>Bluesky</li>
        </ul>
        <ul className='ml-60 text-white'>
            <li>More</li>
            <li>Blog</li>
            <li>Github Org</li>
            <li>Github Repo</li>
            <li>Website Repo</li>
            <li>Old 6.x Site</li>
            <li>Old 5.x Site</li>
        </ul>
        </div>
    </div>
  )
}

export default Footer