import React from 'react';
import CommonTable from '../../component/table/CommonTable.js';
import CommonTableRow from '../../component/table/CommonTableRow';
import CommonTableColumn from '../../component/table/CommonTableColumn';

const PostList = props => {
    return (
      <>
        <CommonTable headersName={['글번호','제목','등록일','조회수']}>
          <CommonTableRow>
            <CommonTableColumn>1</CommonTableColumn>
            <CommonTableColumn>하이요</CommonTableColumn>
            <CommonTableColumn>2022-08-18</CommonTableColumn>
            <CommonTableColumn>155</CommonTableColumn>
          </CommonTableRow>

          <CommonTableRow>
            <CommonTableColumn>2</CommonTableColumn>
            <CommonTableColumn>리액트 재밌네?!</CommonTableColumn>
            <CommonTableColumn>2022-08-18</CommonTableColumn>
            <CommonTableColumn>12</CommonTableColumn>
          </CommonTableRow>

          <CommonTableRow>
            <CommonTableColumn>3</CommonTableColumn>
            <CommonTableColumn>저도 할래요 리액트</CommonTableColumn>
            <CommonTableColumn>2022-08-18</CommonTableColumn>
            <CommonTableColumn>52</CommonTableColumn>
          </CommonTableRow>

          <CommonTableRow>
            <CommonTableColumn>4</CommonTableColumn>
            <CommonTableColumn>리액트는 어려워요</CommonTableColumn>
            <CommonTableColumn>2022-08-18</CommonTableColumn>
            <CommonTableColumn>22</CommonTableColumn>
          </CommonTableRow>

          <CommonTableRow>
            <CommonTableColumn>5</CommonTableColumn>
            <CommonTableColumn>자바스크립트도 어려움ㅋ</CommonTableColumn>
            <CommonTableColumn>2022-08-18</CommonTableColumn>
            <CommonTableColumn>73</CommonTableColumn>
          </CommonTableRow>
          
        </CommonTable>
      </>
    )
  }
  
  export default PostList;