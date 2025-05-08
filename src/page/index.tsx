import "./index.css";

import React from "react";
import * as PRSS from "prss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Page from "@/components/Page";
import { cx } from "@/lib/utils";

const Post = data => {
  PRSS.init(data);
  (window as any).PRSS = PRSS;

  const { content } = PRSS.getProp("item");
  const sidebarHtml = PRSS.getProp("sidebarHtml");

  return (
    <Page className="page-post">
      <Header />
      <main className="pb-6">
        <section className="post-content flex justify-center">
          <div className="relative mx-auto flex max-w-screen-xl flex-col w-full mt-6">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className={cx("w-full", {
                "lg:w-[70%]": sidebarHtml
              })}>
                <div className="post-inner-content prose dark:prose-invert max-w-none pb-8" dangerouslySetInnerHTML={{
                    __html: content
                }}></div>
              </div>
              
              {sidebarHtml && (
                <div className="w-full lg:w-[30%]">
                  <div className="sticky top-10"
                    dangerouslySetInnerHTML={{
                      __html: sidebarHtml
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Page>
  );
};

export default Post;
