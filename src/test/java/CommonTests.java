import org.testng.Assert;
import org.testng.annotations.Test;

public class CommonTests {
    @Test
    public void commonSuccessTest() {
        Assert.assertEquals(5, 5);
    }

    @Test
    public void commonFailureTest() {
        Assert.assertEquals(5, 10);
    }
}
