import React from 'react';
import styled from 'styled-components';
import { CardProfileUser, Cardwrapper, HeadingContent } from '../../components';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const SearchReceiverPage = () => {
  const history = useHistory();

  // START = SEARCHING FEATURE
  const {
    register,
    handleSubmit,
    // watch,
    // getValues,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    return;
  };
  // END = SEARCHING FEATURE
  useEffect(() => {
    document.title = 'Zwallet | Create New Password';
  });

  const actionSearch = () => {};
  return (
    <Cardwrapper>
      <StyledSearchPage>
        <HeadingContent>Search Receiver</HeadingContent>
        <div className="search-section" onClick={actionSearch}>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input-search"
              placeholder="Mencari saya?"
              type="text"
              {...register('searching', {
                minLength: 1,
              })}
            />
          </form>
        </div>
        <div className="body-section">
          <CardProfileUser
            typeTransaction="+65 789 7897 77"
            link="search-receiver/to-username"
          />
          <CardProfileUser
            typeTransaction="+65 789 7897 77"
            link="search-receiver/to-username"
          />
          <CardProfileUser
            typeTransaction="+65 789 7897 77"
            link="search-receiver/to-username"
          />
          <CardProfileUser
            typeTransaction="+65 789 7897 77"
            link="search-receiver/to-username"
          />
          <CardProfileUser
            typeTransaction="+65 789 7897 77"
            link="search-receiver/to-username"
          />
        </div>
      </StyledSearchPage>
    </Cardwrapper>
  );
};

export default SearchReceiverPage;

const StyledSearchPage = styled.div`
  padding: 30px;
  .search-section {
    margin-bottom: 50px;
    background: rgba(58, 61, 66, 0.1);
    border-radius: 12px;
    box-sizing: content-box;
    padding: 15px;
    display: flex;
    gap: 1rem;
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
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
