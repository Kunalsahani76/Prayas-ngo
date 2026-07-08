import Image from 'next/image'
import React from 'react'

export default function BlogMainPage() {
  return (
    <div>
       <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
        Blog of the Day
      </p>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Mission Smile 1k: Outdoor charity outreach
      </h1>

      <div className="space-y-4 text-base text-gray-700 leading-relaxed">
        <p>
          Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
          in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
          tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
          accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in
          viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae.
          Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet,
          nisi eu id.
        </p>

        <p>
          Viverra at diam nunc non ornare. Sed ultrices pulvinar nunc, lacus
          sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras
          volutpat dui. A bibendum viverra eu cras. Mauris morbi sed dignissim
          in ac in aliquam fringilla et. Mattis elit dignissim nibh sit. Donec
          arcu sed elit scelerisque tempor ornare tristique.
        </p>

        <p>
          Integer faucibus duis praesent tempor feugiat ornare in. Erat libero
          egestas porttitor nunc pellentesque mauris et pulvinar eget.
        </p>

        <p>
          Consectetur feugiat quis hac enim nullam in enim. Tellus nisi dapibus
          libero rutrum vitae nisl, cursus in sed. Egestas mi ultricies et
          consectetur vel non. Augue enim enim, eget ut sit purus, justo nisl
          pharetra. Tincidunt leo aenean dui, varius metus, vel. Maecenas eu
          rhoncus, est nunc nisi.
        </p>
      </div>

      <div className="my-8">
        <Image
          src="/images/group_students.jpg" // Replace with your image path
          alt="Charity outreach"
          width={800}
          height={400}
          className="rounded-xl object-cover"
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Some cool heading</h2>

      <p className="text-base text-gray-700 mb-4">
        Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at
        sit convallis blandit blandit in. Maecenas odio orci lectus urna ante
        consequat erat non morbi.
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-800 font-semibold">
        <li>Posuere sed pulvinar enim faucibus justo, cursus.</li>
        <li>In diam facilisi at sit convallis blandit blandit in.</li>
        <li>Maecenas odio orci lectus urna ante consequat erat non morbi.</li>
      </ul>

      <p className="text-base text-gray-700 mt-4">
        Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at
        sit convallis blandit blandit in. Maecenas odio orci lectus urna ante
        consequat erat non morbi.
      </p>
    </div>
  )
}
