import dynamic from "next/dynamic";

const AgoraAppBuilderWraper = dynamic(
  () => import("../components/AppBuilderWrapper"),
  {
    ssr: false,
  }
);

const VideoCall = () => {
  return (
    <div suppressHydrationWarning={true}>
      hi able
      <AgoraAppBuilderWraper />
    </div>
  );
};
export default VideoCall;
