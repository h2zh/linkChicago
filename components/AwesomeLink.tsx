import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdAddCircle } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";

const BookmarkLinkMutation = gql`
  mutation ($id: String!) {
    bookmarkLink(id: $id) {
      title
      url
      imageUrl
      category
      description
    }
  }
`;

export const AwesomeLink = ({
  imageUrl,
  url,
  title,
  category,
  description,
  id,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [createBookmark] = useMutation(BookmarkLinkMutation);

  const bookmark = async () => {
    setIsLoading(true);
    toast.promise(createBookmark({ variables: { id: id } }), {
      loading: "working on it",
      success: "Saved successfully! 🎉",
      error: `Something went wrong 😥 Please try again`,
    });
    setIsLoading(false);
  };
  return (
    <div key={id} className="shadow  max-w-md  rounded">
      <Link href={url}>
        <img src={imageUrl} className="cursor-pointer" />
      </Link>
      <div className="p-5 flex flex-col space-y-2">
        <p className="text-sm text-gray-400">{category}</p>
        <div className="flex flex-row space-x-1 items-center">
          <Link href={url}>
            <div className="flex flex-row">
              <p className="cursor-pointer text-lg font-medium text-blue-500">
                {title}
              </p>
            </div>
          </Link>
          <button onClick={bookmark}>
            <MdAddCircle className="hover:text-blue-500 cursor-pointer" />
          </button>
        </div>
        <Link href={`/link/${id}`}>
          <p className="text-gray-600">{description}</p>
        </Link>
        {/* <a href={url} className="flex hover:text-blue-500">*/}
        {/* removes https from url */}
        {/* {url.replace(/(^\w+:|^)\/\//, "")}
        </a>  */}
      </div>
    </div>
  );
};
