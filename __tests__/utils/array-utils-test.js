jest.unmock('../../app/utils/arrayUtils'); // unmock to use the actual implementation of sum
import { reduceArrayByEqualKeys} from '../../app/utils/arrayUtils'

describe('Reduce Array By Equal Keys', () => {
  const arr = [
    {id: 23, payload: 'fdsfsdfsd'},
    {id: 23, payload: 'vcxzv'},
    {id: 24, payload: 'rewqr'},
    {id: 24, payload: 'ty'},
    {id: 24, payload: '43214'},
    {id: 25, payload: 'rewjvxczv'},
    {id: 26, payload: 'm,./m./'},
    {id: 26, payload: '890808dfs'},
    {id: 26, payload: 'cvxz234'},
    {id: 27, payload: '4324fds432'},
  ];

  const expectedResult = [
    [
      {id: 23, payload: 'fdsfsdfsd'},
      {id: 23, payload: 'vcxzv'},
    ],
    [
      {id: 24, payload: 'rewqr'},
      {id: 24, payload: 'ty'},
      {id: 24, payload: '43214'},
    ],
    [
      {id: 25, payload: 'rewjvxczv'},
    ],
    [
      {id: 26, payload: 'm,./m./'},
      {id: 26, payload: '890808dfs'},
      {id: 26, payload: 'cvxz234'},
    ],
    [
      {id: 27, payload: '4324fds432'},
    ]
  ]

  it('reduce with :id key and fn that returns args', () => {
    expect(reduceArrayByEqualKeys(arr, 'id', (id) => id)).toEqual(expectedResult);
  });
});
