import { ScrollView, Text } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

export default function Categories() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}>
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing' />
    </ScrollView>
  );
}
