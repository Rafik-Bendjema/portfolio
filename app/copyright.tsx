// components/Copyright.tsx
export default function Copyright() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full flex items-center justify-center p-4 mt-4 border-t">
      © {currentYear} Bendjema Rafik. All rights reserved.
    </footer>
  );
}
