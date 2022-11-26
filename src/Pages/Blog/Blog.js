import React from "react";
import { Link } from "react-router-dom";
import FAQ from "./FAQ";

const Blog = () => {
  return (
    <div>
      <section className="py-6 sm:py-12 dark:text-gray-900">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Upcoming products...</h2>
            <p className="font-serif text-sm dark:text-gray-400">
              Blog site is available for everyone.anyone can see this site
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col dark:bg-white border-8 rounded-lg border-white">
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src="https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              />

              <div className="flex flex-col flex-1 p-6">
                <Link
                  to="/allproduct"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                >
                  All Product
                </Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-gray-900">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>June 4, 2020</span>
                  <span>2.4K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-white border-8 rounded-lg border-white">
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src="https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
              />

              <div className="flex flex-col flex-1 p-6">
                <Link
                  to="/allproduct"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                >
                  All Product
                </Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-gray-900">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>June 4, 2020</span>
                  <span>2.4K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-white border-8 rounded-lg border-white">
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src="https://images.unsplash.com/photo-1664574653790-cee0e10a4242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <div className="flex flex-col flex-1 p-6">
                <Link
                  to="/allproduct"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                >
                  All Product
                </Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-gray-900">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>June 4, 2020</span>
                  <span>2.4K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-white border-8 rounded-lg border-white">
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              />
              <div className="flex flex-col flex-1 p-6">
                <Link
                  to="/allproduct"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                >
                  All Product
                </Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-gray-900">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>June 4, 2020</span>
                  <span>2.4K views</span>
                </div>
              </div>
            </article>
          </div>
        </div>
          </section>
          <FAQ></FAQ>
    </div>
  );
};

export default Blog;
