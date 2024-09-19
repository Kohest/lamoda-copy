interface Props {
  code: string;
}
const EmailVerificationCodeTemplate: React.FC<Props> = ({ code }) => {
  return (
    <div>
      <p>Код подтверждения {code}</p>
      <p>
        <a href={`http://localhost:3000/api/auth/verify?code=${code}`}>
          Подтвердить регистрацию
        </a>
      </p>
    </div>
  );
};

export default EmailVerificationCodeTemplate;
