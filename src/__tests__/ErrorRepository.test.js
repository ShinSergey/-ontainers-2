import ErrorRepository from '../ErrorRepository';

test('should create class', () => {
  expect(new ErrorRepository(924, 'Wrong answer!')).toEqual({
    code: 924,
    meaning: 'Wrong answer!',
  });
});

test('should translate', () => {
  expect(ErrorRepository.translate(924)).toEqual('Wrong answer!');
});

test('should error', () => {
  expect(ErrorRepository.translate(943)).toEqual('Unknown error');
});
