import { useEffect, useState } from 'react';
import { useAppSelector } from '../store';
import { UserPostType } from '../constants/types';
import { getPosts } from '../services/apis';

const useSearchResult = () => {
  const { searchStr } = useAppSelector(store => store.search);
  const [allPosts, setAllPosts] = useState<UserPostType[]>([]);
  const [filteredResult, setFilterdResult] = useState<UserPostType[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefeshing] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPosts().finally(() => {
      setLoading(false);
    });
  }, []);

  const fetchPosts = async () => {
    setRefeshing(true);
    await getPosts()
      .then(res => {
        setAllPosts(res);
      })
      .catch(() => {
        setFilterdResult([]);
      })
      .finally(() => {
        setRefeshing(false);
      });
  };

  useEffect(() => {
    setFilterdResult(filterSearch(searchStr, allPosts));
  }, [searchStr, allPosts]);

  const filterSearch = (str: string, arr: UserPostType[]): UserPostType[] => {
    return arr.filter(post =>
      post.title.toLowerCase().includes(str.toLowerCase()),
    );
  };

  return { filteredResult, searchStr, loading, fetchPosts, refreshing };
};

export default useSearchResult;
