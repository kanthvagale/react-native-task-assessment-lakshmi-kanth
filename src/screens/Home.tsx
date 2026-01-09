import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import { ms, s } from '../utils/scale';
import { Fonts } from '../constants/fonts';
import { UserPostType } from '../constants/types';
import useSearchResult from '../hooks/useSearchResult';
import PostCard from '../components/Home/PostCard';
import BaseTextInput from '../components/BaseTextInput';
import { useAppDispatch } from '../store';
import { searchTxtChange } from '../store/slices/searchSlice';
import PostLoader from '../components/Home/PostLoader';

const Home = () => {
  const { filteredResult, searchStr, fetchPosts, loading, refreshing } =
    useSearchResult();
  const dispatch = useAppDispatch();

  const renderExpenseItem = useCallback<ListRenderItem<UserPostType>>(
    ({ item }) => {
      return <PostCard {...item} />;
    },
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar
        barStyle={'dark-content'}
        backgroundColor={'#FFFFFF'}
      />
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Posts</Text>
      </View>

      <FlatList
        data={filteredResult}
        renderItem={renderExpenseItem}
        ListHeaderComponent={
          // {/* search input */}
          <View style={styles.search}>
            <BaseTextInput
              value={searchStr}
              setValue={val => {
                dispatch(searchTxtChange({ searchStr: val.toString() }));
              }}
              placeholder="Search Posts"
            />
          </View>
        }
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll={true}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={
          loading ? (
            <PostLoader />
          ) : (
            <Text style={styles.noPosts}>No posts found</Text>
          )
        }
        contentContainerStyle={styles.contentContainerStyle}
        refreshing={refreshing}
        onRefresh={fetchPosts}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7F8',
  },
  header: {
    padding: s(16),
  },
  headerTxt: {
    fontFamily: Fonts.INTER.bold,
    fontSize: ms(28),
    color: '#000000',
  },
  contentContainerStyle: {
    paddingHorizontal: s(16),
    gap: s(12),
    paddingBottom: s(100),
  },
  search: {
    paddingBottom: s(8),
    backgroundColor: '#F6F7F8',
  },
  noPosts: {
    fontFamily: Fonts.INTER.bold,
    fontSize: ms(20),
    color: '#000000',
    textAlign: 'center',
  },
});
