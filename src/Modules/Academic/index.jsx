import { useNavigate } from "react-router-dom";
import { Text, Card, Button, Group } from "@mantine/core";
import CustomBreadcrumbs from "../../components/Breadcrumbs";

function AcademicPage() {
  const navigate = useNavigate();

  return (
    <>
      <CustomBreadcrumbs />
      <Text>Academic Page</Text>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Text size="lg" weight={500}>
          Course Management
        </Text>
        <Text size="sm" color="dimmed">
          Manage courses, content, and student evaluations.
        </Text>

        <Group position="apart" mt="md" mb="xs">
          <Button
            variant="light"
            color="blue"
            fullWidth
            onClick={() => navigate("/academics/course-management")}
          >
            Go to Course Management
          </Button>
        </Group>
      </Card>
    </>
  );
}

export default AcademicPage;
