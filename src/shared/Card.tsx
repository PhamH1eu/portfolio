interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="p-6 bg-white rounded-md shadow-md border border-gray-200 transform transition duration-300 hover:scale-101 hover:shadow-lg hover:shadow-gray-300">
      {children}
    </div>
  );
};

export default Card;
