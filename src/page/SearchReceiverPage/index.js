import React from 'react';
import styled from 'styled-components';
import { CardProfileUser, Cardwrapper } from '../../components';

const SearchReceiverPage = () => {
  return (
    <Cardwrapper>
      <StyledSearchPage>
        <div className="heading-section">
          <h2 className="text-heading">Search Receiver</h2>
        </div>
        <div className="search-section">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path
              d="M15 16L20 21"
              stroke="#A9A9A9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 18C13.866 18 17 14.866 17 11C17 7.13401 13.866 4 10 4C6.13401 4 3 7.13401 3 11C3 14.866 6.13401 18 10 18Z"
              stroke="#A9A9A9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <form>
            <input
              className="input-search"
              placeholder="Mencari saya?"
              type="text"
            />
          </form>
        </div>
        <div className="body-section">
          <CardProfileUser typeTransaction="+65 789 7897 77" link="Samuela" />
          <CardProfileUser typeTransaction="+65 789 7897 77" link="Samuela" />
          <CardProfileUser typeTransaction="+65 789 7897 77" link="Samuela" />
          <CardProfileUser typeTransaction="+65 789 7897 77" link="Samuela" />
          <CardProfileUser typeTransaction="+65 789 7897 77" link="Samuela" />
        </div>
      </StyledSearchPage>
    </Cardwrapper>
  );
};

export default SearchReceiverPage;

const StyledSearchPage = styled.div`
  padding: 30px;
  .heading-section {
    margin-bottom: 25px;
  }
  .search-section {
    margin-bottom: 50px;
    background: rgba(58, 61, 66, 0.1);
    border-radius: 12px;
    box-sizing: content-box;
    padding: 15px;
    display: flex;
    gap: 1rem;
    .icon {
    }
    form {
      width: 100%;
      .input-search {
        width: 100%;
        height: 23px;
        border: 0;
        background-color: transparent;
        &:focus {
          outline: none;
        }
      }
    }
  }
  .body-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    /* background-color: green; */
  }
`;
