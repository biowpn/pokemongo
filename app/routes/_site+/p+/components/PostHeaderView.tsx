import { Image } from "~/components/Image";

import { PostAuthorHeader } from "./PostAuthorHeader";
import type { PostData } from "../utils/fetchPostWithSlug.server";

export function PostHeaderView({ post }: { post: PostData }) {
   return (
      <section>
         <h1 className="font-header text-3xl !leading-[3rem] laptop:text-4xl pb-2.5">
            {post.name}
         </h1>
         <PostAuthorHeader post={post} />
         {post.subtitle && (
            <div className="text-1 mb-5 border-b border-color-secondary pb-3 text-sm font-semibold">
               {post.subtitle}
            </div>
         )}
         {post?.banner && (
            <>
               <div className="bg-1 border-color -mx-3 tablet:-mx-6 flex aspect-[1.91/1] items-center tablet:rounded-lg justify-center overflow-hidden shadow-sm mb-5">
                  <Image
                     alt="Post Banner"
                     className="h-full w-full object-cover"
                     options="crop=1200,630&aspect_ratio=1.9:1"
                     url={post?.banner?.url}
                  />
               </div>
            </>
         )}
      </section>
   );
}
