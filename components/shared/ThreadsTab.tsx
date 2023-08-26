interface Props {
  currentUserId: string;
  accountId: string;
  accountType: string;
}

const ThreadsTab = async ({ currentUserId, accountId, accountType }: Props) => {
  return (
    <div>
      <h1>ThreadsTab</h1>
    </div>
  );
};

export default ThreadsTab;
