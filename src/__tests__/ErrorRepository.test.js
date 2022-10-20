import ErrorRepository from '../ErrorRepository';

test('should create class', () => {
  expect(new ErrorRepository(924, 'Wrong answer!')).toEqual({
    code: 924,
    meaning: 'Wrong answer!',
  });
});

test('should translate', () => {
  const newEr = new ErrorRepository(924, 'Wrong answer!');
  expect(newEr.translate(924)).toEqual('Wrong answer!');
});

test('should error', () => {
  const newEr = new ErrorRepository(924, 'Wrong answer!');
  expect(newEr.translate(943)).toEqual('Unknown error');
});
