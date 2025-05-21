export function Button({ value }) {
    return (
        <button type="button" className="btn btn-primary" value={value}>{value}</button>

    );
}