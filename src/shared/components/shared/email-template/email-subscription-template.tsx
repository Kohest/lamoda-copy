interface Props {
  code: string;
}
const EmailSubscriptionTemplate: React.FC<Props> = ({ code }) => {
  return (
    <div>
      <p>Код проверки для подписки на обновления {code}</p>
      <p>
        <a href={`http://localhost:3000/api/subscription?code=${code}`}>
          Подтвердить подписку на обновления
        </a>
      </p>
    </div>
  );
};

export default EmailSubscriptionTemplate;
