export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  const Buf = new ArrayBuffer(length);
  const i8 = new Int8Array(Buf, 0, length);
  i8.set([value], position);
  return new DataView(Buf);
}
