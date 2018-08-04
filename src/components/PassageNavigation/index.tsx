import * as React from "react";
import { Versification } from "@bible-reader/types";

import { PassageChangeFuncCurried, PassageCloseFuncCurried } from "../../types";

import ChapterSelect from "../../components/ChapterSelect";
import BibleVersionSelect from "../../components/BibleVersionSelect";

import "./PassageNavigation.css";

interface PassageNavigationProps {
  allVersionIds: string[];
  versionId: string;
  book: string;
  chapter: number;
  v11n: Versification;
  onPassageChange: PassageChangeFuncCurried;
  onPassageClose: PassageCloseFuncCurried;
  loading: boolean;
}

export default class PassageNavigation extends React.Component<
  PassageNavigationProps,
  {}
> {
  onChapterChange = (book: string, chapter: number) => {
    this.props.onPassageChange(this.props.versionId, book, chapter);
  };

  onVersionChange = (versionId: string) => {
    this.props.onPassageChange(versionId, this.props.book, this.props.chapter);
  };

  handleClose = () => {
    this.props.onPassageClose();
  };

  render() {
    const {
      allVersionIds,
      versionId,
      book,
      chapter,
      v11n
    }: PassageNavigationProps = this.props;

    return (
      <div className="PassageNavigation">
        <ChapterSelect
          book={book}
          chapter={chapter}
          v11n={v11n}
          onChange={this.onChapterChange}
          loading={this.props.loading}
        />
        <BibleVersionSelect
          versionId={versionId}
          allVersionIds={allVersionIds}
          onChange={this.onVersionChange}
        />
        <button
          className="PassageNavigation_close-button"
          onClick={this.handleClose}
          title="Close"
        >
          ⨯
        </button>
      </div>
    );
  }
}
