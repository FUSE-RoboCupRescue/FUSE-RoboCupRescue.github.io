/**
 * A template re-mounts on every navigation, so this wrapper replays the
 * page-enter animation each time someone moves between pages.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
