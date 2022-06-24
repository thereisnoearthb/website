import Image from "next/image";
import { Component } from "react";
import markdownToHtml from "../../lib/markdownToHtml";
import markdownStyles from "../markdown-styles.module.css";

export default class PetitionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    markdownToHtml(this.props.petition.content)
      .then(html => {
        this.setState({ content: html });
      });
  }

  render() {
    return (
      <>
        <div className={(this.props.show ? "" : "hidden ") + "bg-accent-2 fixed top-0 left-0 min-h-screen w-full z-1 opacity-40"}>
        </div>
        <div id={"modal-" + this.props.petition.slug} className={(this.props.show ? "" : "hidden ") + "overflow-y-auto overflow-x-hidden absolute grid place-items-center top-0 left-0 content-start z-50 w-full md:inset-0 h-modal md:h-full"} onClick={() => this.props.setShow(false)}>
          <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <div className="relative bg-accent-1 rounded-lg shadow">
              <div className="flex justify-between items-start p-4 rounded-t">
                <h3 className="text-xl font-semibold text-accent-3 mt-1 ml-3.5 dark:text-white">
                  {this.props.petition.title}
                </h3>
                <button type="button" className="cursor-pointer text-accent-2 bg-transparent hover:bg-accent-2 hover:text-accent-1 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => this.props.setShow(false)} data-modal-toggle={"modal-" + this.props.petition.slug}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </div>
              <div className="px-6 space-y-6">
                <div className="mx-2 my-0 text-justify text-sm leading-relaxed text-accent-2">
                  <div className={markdownStyles['markdown'] + ' ' + markdownStyles['petitions']} dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
                </div>
                <div className="w-full my-0 relative h-[20em]">
                  <Image layout="fill" objectFit="cover" objectPosition='center' src={this.props.petition.coverImage} alt={this.props.petition.title} className="rounded-3xl shadow" placeholder="blur" blurDataURL={`/_next/image?url=${this.props.petition.coverImage}&w=16&q=1`} />
                </div>
              </div>
              <div className="flex w-full items-center p-6 space-x-2 rounded-b">
                <a target={'_blank'} href={this.props.petition.link} type="button" className="shadow w-full text-center text-accent-1 bg-accent-2 hover:bg-accent-1 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm font-medium px-5 py-2.5 hover:text-accent-2 focus:z-10 cursor-pointer">Sign the Petition</a>
              </div>
            </div>
          </div>
        </div >
      </>
    );
  }

}
