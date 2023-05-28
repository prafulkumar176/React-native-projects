import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';
import InfiniteScroll from '../packages/blocks/InfiniteScroll/InfiniteScroll';

jest.mock('react-native-calendar-strip', () => 'CalendarStrip');
jest.mock('react-native-linear-gradient', () => 'LinearGradient');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');
jest.mock('react-native-vector-icons/Octicons', () => 'Octicons');
globalThis.fetch = jest.fn().mockImplementationOnce(() => {
  return Promise.resolve({
    json: () =>
      Promise.resolve({
        data: [
          {
            id: 1,
            title: 'test',
            description: 'test',
            date: '2020-01-01',
            location: 'test',
            type: 'test',
            image: 'test',
            url: 'test',
            urlToImage: 'test',
          },
        ],
      }),
  });
});

describe('Infinite component render', () => {
  test('should render', () => {
    const data = {
      airline: [
        {
          name: ' Checking Airways',
          logo: ' https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png',
        },
        {
          name: ' Checking Airways',
          logo: '',
        },
      ],
      name: 'Summer Galur',
      trips: 250,
      _id: 1,
    };
    const {getByTestId} = render(<InfiniteScroll data={data} />);
    const flatList = getByTestId('flatlist');
    render(flatList.props.renderItem({item: data}));
  });
});
