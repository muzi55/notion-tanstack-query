import { useQuery } from "@tanstack/react-query";

function App() {
  const userData = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("/usersData.json");
      return response.json();
    },
  });

  console.log(userData);
  return <>test</>;
}

export default App;
