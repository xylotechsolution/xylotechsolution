// MongoDB কানেকশন বাইপাস করে ডামি অ্যাসিনক্রোনাস ফাংশন
export default async function dbConnect() {
  return Promise.resolve(null);
}
