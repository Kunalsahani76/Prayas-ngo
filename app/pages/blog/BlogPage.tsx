// pages/blog.tsx
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { FaUserAlt, FaShareAlt } from "react-icons/fa";

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

const blogs: BlogCardProps[] = [
  {
    image: "/images/home_right_side.jpg",
    category: "Water",
    title: "Children Education Needs For Well The World.",
    description:
      "Lorem Ipsum is simply dummy text of the industry's since the unknown.",
    author: "Adam",
    date: "25 February",
  },
  {
    image: "/images/home_right_side.jpg",
    category: "Education",
    title: "Old Education Needs For Change The World.",
    description:
      "Lorem Ipsum is simply dummy text of the industry's since the unknown.",
    author: "Adam",
    date: "25 February",
  },
  {
    image: "/images/home_right_side.jpg",
    category: "Poor",
    title: "Donation is Hope for Poor Childrens",
    description:
      "Lorem Ipsum is simply dummy text of the industry's since the unknown.",
    author: "Adam",
    date: "25 February",
  },
];

const BlogCard: FC<BlogCardProps> = ({
  image,
  category,
  title,
  description,
  author,
  date,
}) => {
  const [day, month] = date.split(" ");

  return (
    <div className="bg-white subheading rounded-md overflow-hidden shadow hover:shadow-lg transition duration-300 w-full ">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="absolute z-10 top-4 left-4 bg-green-600 text-white px-3 py-1 text-center leading-tight">
          <p className="text-[30px] font-bold heading">{day}</p>
          <p className="text-[20px]">{month}</p>
        </div>
        <div className="border border-white h-[72px] w-[114px] absolute top-6 left-6 "></div>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <span className="bg-green-600 text-white text-sm px-4 py-2 rounded">
            {category}
          </span>
          <FaShareAlt className="text-gray-600" />
        </div>

        <h3 className="font-semibold text-[22px] md:text-[30px] text-gray-800 ">{title}</h3>
        <p className="text-[16px] md:text-[22px] text-gray-600">{description}</p>

        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center text-green-700 gap-1">
            <FaUserAlt className="text-sm" />
            <span className="text-sm">{author}</span>
          </div>

          <Button
            variant="outline"
            className="border-[#299E58] bg-transparent text-[#299E58] hover:bg-emerald-700"
          >
            <Link href="/donate"> View Details</Link>&nbsp;&nbsp;
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

const BlogPage = () => {
  return (
    <section className="py-10 lg:py-16 bg-white w-full container mx-auto px-4">
      <div className="w-full container mx-auto">
        <h2 className="text-3xl md:text-5xl heading font-semibold text-left md:text-center  text-gray-800">
          Latest News From <br />
        </h2>
        <h2 className="text-3xl md:text-5xl heading font-semibold text-left md:text-center mb-10 pt-[10px] text-gray-800">
          Givest Blog
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
