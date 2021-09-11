import { makeStyles } from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AVAUserDefault } from '../../assets';
import { CardProfileUser, Cardwrapper, HeadingContent } from '../../components';

// import { useHistory } from 'react-router-dom';

const SearchReceiverPage = () => {
  const [searchAllResult, setSearchAllResult] = useState([]);
  const [paginationState, setPaginationState] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [searchKeyword, setSerchKeyword] = useState('');
  // const [searchResult, setSearchResult] = useState([]);
  const token = localStorage.getItem('token');
  // const history = useHistory();

  // START = SEARCHING FEATURE

  // END = SEARCHING FEATURE
  useEffect(() => {
    document.title = 'Zwallet | Create New Password';
  });

  // START = SEARCHING FEATURE
  const actionSearch = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_API}/users?search=${searchKeyword}&perPage=5&page=1`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        const data = result.data.data;
        const pagination = result.data.meta;
        setPaginationState(pagination);
        setSearchAllResult(data);
      })
      .catch((err) => {
        // console.log(err.resonse);
      });
  };

  useEffect(() => {
    actionSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKeyword]);

  // END = SEARCHING FEATURE
  // START = SEARCHING FEATURE

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        // console.log(result);
        const data = result.data.data;
        // console.log('DATA 1: ', data);
        setSearchAllResult(data);
      })
      .catch((err) => {
        // console.log(err.resonse);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // END = SEARCHING FEATURE

  // START = PAGINATION
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  function PaginationOutlined() {
    const classes = useStyles();
    const handlePagination = (event, value) => {
      setCurrentPage(value);
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_API}/users?perPage=5&page=${value}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setSearchAllResult(res.data.data);
        });
    };

    return (
      <div className={classes.root}>
        <Pagination
          count={paginationState?.totalPage}
          page={currentPage}
          variant="outlined"
          onChange={handlePagination}
        />
      </div>
    );
  }

  // END = PAGINATION

  // START = SORT LOGIC
  const [sorting, setSorting] = useState('ASC');

  const actionSort = () => {
    sorting === 'ASC' ? setSorting('DESC') : setSorting('ASC');
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_API}/users?perPage=5&order=${sorting}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        const data = res.data.data;
        setSearchAllResult(data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  // END = SORT LOGIC

  return (
    <>
      <Cardwrapper>
        <StyledSearchPage sorting={sorting}>
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 18C13.866 18 17 14.866 17 11C17 7.13401 13.866 4 10 4C6.13401 4 3 7.13401 3 11C3 14.866 6.13401 18 10 18Z"
                stroke="#A9A9A9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <form>
              <input
                className="input-search"
                placeholder="Mencari saya?"
                type="text"
                name="search"
                onChange={(e) => setSerchKeyword(e.target.value)}
              />
            </form>
          </div>
          <div className="sort-btn" onClick={actionSort}>
            <FilterListIcon className="btn-sort" />
          </div>
          <div className="body-section">
            {searchAllResult.length > 0 &&
              searchAllResult.map((item, index) => {
                return (
                  <CardProfileUser
                    key={index}
                    avatar={item.avatar ? item.avatar : AVAUserDefault}
                    typeTransaction={item.phone}
                    link={`search-receiver/${item.id}`}
                    username={item.username}
                  />
                );
              })}
          </div>
        </StyledSearchPage>
      </Cardwrapper>
      <PaginationOutlined />
    </>
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
  .sort-btn {
    text-align: right;
    .btn-sort {
      transform: ${({ sorting }) =>
        sorting === 'ASC' ? 'rotate(0deg)' : 'rotate(180deg)'};
      &:hover {
        cursor: pointer;
        opacity: 0.5;
      }
    }
  }
`;
